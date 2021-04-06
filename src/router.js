import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home"),
    redirect: `${adminRoot}/dashboards`
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/dashboards`,
    meta: { loginRequired: true },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */
    children: [
      {
        path: "dashboards",
        component: () => import("./views/app/dashboards"),
        redirect: `${adminRoot}/dashboards/default`,
        children: [
          {
            path: "default",
            component: () => import("./views/app/dashboards/default")
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }
        ]
      },
      {
        path: "settings",
        component: () => import("./views/app/settings")
      },
      {
        path: "customers",
        component: () => import("./views/app/customers"),
        redirect: `${adminRoot}/customers/customers-select`,
        children: [
          {
            path: "customers-select",
            component: () => import("./views/app/customers/customers-select")
          },
          {
            path: "customers-add",
            component: () => import("./views/app/customers/customers-add")
          },
          {
            path: "customers-update",
            component: () => import("./views/app/customers/customers-update")
          }
        ]
      },
      {
        path: "categories",
        component: () => import("./views/app/categories"),
        redirect: `${adminRoot}/categories/categories-select`,
        children: [
          {
            path: "categories-select",
            component: () => import("./views/app/categories/categories-select")
          },
          {
            path: "categories-add",
            component: () => import("./views/app/categories/categories-add")
          },
          {
            path: "categories-update",
            component: () => import("./views/app/categories/categories-update")
          }
        ]
      },
      {
        path: "products",
        component: () => import("./views/app/products"),
        redirect: `${adminRoot}/products/products-select`,
        children: [
          {
            path: "products-select",
            component: () => import("./views/app/products/products-select")
          },
          {
            path: "products-add",
            component: () => import("./views/app/products/products-add")
          },
          {
            path: "products-update",
            component: () => import("./views/app/products/products-update")
          }
        ]
      },
      {
        path: "bouchers",
        component: () => import("./views/app/bouchers"),
        redirect: `${adminRoot}/bouchers/`,
        children: [
          {
            path: "invoices",
            component: () => import("./views/app/bouchers/invoices"),
            redirect: `${adminRoot}/bouchers/invoices/invoices-select`,
            children: [
              {
                path: "invoices-select",
                component: () =>
                  import("./views/app/bouchers/invoices/invoices-select")
              }
            ]
          },
          {
            path: "products-add",
            component: () => import("./views/app/products/products-add")
          },
          {
            path: "products-update",
            component: () => import("./views/app/categories/categories-update")
          }
        ]
      },
      {
        path: "reports",
        component: () => import("./views/app/reports")
      }
      // {
      //   path: "piaf",
      //   component: () =>
      //     import(/* webpackChunkName: "piaf" */ "./views/app/piaf"),
      //   redirect: `${adminRoot}/piaf/start`,
      //   children: [
      //     {
      //       path: "start",
      //       component: () =>
      //         import(/* webpackChunkName: "piaf" */ "./views/app/piaf/Start")
      //       // meta: { roles: [UserRole.Admin, UserRole.Editor] },
      //     }
      //   ]
      // },
      // {
      //   path: "second-menu",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "second-menu" */ "./views/app/second-menu"
      //     ),
      //   redirect: `${adminRoot}/second-menu/second`,
      //   children: [
      //     {
      //       path: "second",
      //       component: () =>
      //         import(
      //           /* webpackChunkName: "piaf" */ "./views/app/second-menu/Second"
      //         )
      //     }
      //   ]
      // },
      // {
      //   path: "single",
      //   component: () =>
      //     import(/* webpackChunkName: "single" */ "./views/app/single")
      // }
    ]
  },
  {
    path: "/error",
    component: () => import("./views/Error")
  },
  {
    path: "/user",
    component: () => import("./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () => import("./views/user/Login")
      },
      {
        path: "register",
        component: () => import("./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () => import("./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () => import("./views/user/ResetPassword")
      }
    ]
  },
  {
    path: "*",
    component: () => import("./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});
router.beforeEach(AuthGuard);
export default router;
