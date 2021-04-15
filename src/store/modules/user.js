import firebase from "firebase/app";
import "firebase/auth";
import { apiUrl, currentUser, isAuthGuardActive } from "../../constants/config";
import { setCurrentUser, getCurrentUser } from "../../utils";
import axios from "axios";

export default {
  state: {
    currentUser: isAuthGuardActive ? getCurrentUser() : currentUser,
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.processing = false;
      state.loginError = null;
    },
    setLogout(state) {
      state.currentUser = null;
      state.processing = false;
      state.loginError = null;
    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
      state.processing = false;
    },
    setForgotMailSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.forgotMailSuccess = true;
    },
    setResetPasswordSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.resetPasswordSuccess = true;
    },
    clearError(state) {
      state.loginError = null;
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(payload.email, payload.password)
      //   .then(
      //     user => {
      //       const item = { uid: user.user.uid, ...currentUser }
      //       setCurrentUser(item)
      //       commit('setUser', item)
      //     },
      //     err => {
      //       setCurrentUser(null);
      //       commit('setError', err.message)
      //       setTimeout(() => {
      //         commit('clearError')
      //       }, 3000)
      //     }
      //   )
      let formData = new FormData();

      formData.append("username", payload.email);
      formData.append("password", payload.password);
      axios
        .post(apiUrl + "/login/access-token", formData)
        .then(response => {
          this.info = response.data;
          console.log(this.info);
          console.log(response.data.access_token);
          ///
          const token = response.data.access_token;
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          axios
            .post(apiUrl + "/login/test-token", {
              headers: {
                Authorisation: `Bearer ${token}`
              }
            })
            .then(response1 => {
              console.log(response1.data);
              const item = {
                uid: token,
                id: response1.data.id_usuario,
                title: response1.data.nombre,
                img: "/assets/img/profiles/l-1.jpg",
                date: "Last seen today 15:24",
                role: 1
                // ...currentUser
              };
              setCurrentUser(item);
              commit("setUser", item);
            })
            .catch(err => {
              console.log("Error" + err);
            })
            .finally();

          ///
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
          setCurrentUser(null);
          commit("setError", error.message);
          setTimeout(() => {
            commit("clearError");
          }, 3000);
        })
        .finally(() => (this.loading = false));
    },

    informacionDeUsuario(token) {},

    forgotPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then(
          user => {
            commit("clearError");
            commit("setForgotMailSuccess");
          },
          err => {
            commit("setError", err.message);
            setTimeout(() => {
              commit("clearError");
            }, 3000);
          }
        );
    },
    resetPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      firebase
        .auth()
        .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
        .then(
          user => {
            commit("clearError");
            commit("setResetPasswordSuccess");
          },
          err => {
            commit("setError", err.message);
            setTimeout(() => {
              commit("clearError");
            }, 3000);
          }
        );
    },

    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            setCurrentUser(null);
            commit("setLogout");
          },
          _error => {}
        );
    }
  }
};
