import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
    id: "dashboard",
    icon: "iconsminds-line-chart-1",
    label: "menu.dashboards",
    to: `${adminRoot}/dashboards`,
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.default",
        to: `${adminRoot}/dashboards/default`
        // roles: [UserRole.Admin, UserRole.Editor],
      }
    ]
  },
  {
    id: "settings",
    icon: "iconsminds-gear",
    label: "menu.settings",
    to: `${adminRoot}/settings`
  },
  {
    id: "customers",
    icon: "simple-icon-user",
    label: "menu.customers",
    to: `${adminRoot}/customers`
  },
  {
    id: "products",
    icon: "simple-icon-bag",
    label: "menu.products",
    to: `${adminRoot}/products`,
    subs: [
      {
        icon: "iconsminds-box-with-folders",
        label: "menu.categories",
        to: `${adminRoot}/categories/`
        // roles: [UserRole.Admin, UserRole.Editor],
      },
      {
        icon: "iconsminds-box-close",
        label: "menu.products",
        to: `${adminRoot}/products/products-select`
        // roles: [UserRole.Admin, UserRole.Editor],
      }
    ]
  },
  {
    id: "bouchers",
    icon: "iconsminds-billing",
    label: "menu.bouchers",
    to: `${adminRoot}/bouchers/`,
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.invoice",
        to: `${adminRoot}/bouchers/invoices/`
        // roles: [UserRole.Admin, UserRole.Editor],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.debit_note",
        to: `${adminRoot}/products/products-select`
        // roles: [UserRole.Admin, UserRole.Editor],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.credit_note",
        to: `${adminRoot}/categories/`
        // roles: [UserRole.Admin, UserRole.Editor],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.retention_receipt",
        to: `${adminRoot}/products/products-select`
        // roles: [UserRole.Admin, UserRole.Editor],
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.referral_guide",
        to: `${adminRoot}/products/products-select`
        // roles: [UserRole.Admin, UserRole.Editor],
      }
    ]
  },
  {
    id: "reports",
    icon: "iconsminds-line-chart-1",
    label: "menu.reports",
    to: `${adminRoot}/reports/`
  },
  // {
  //   id: "piaf",
  //   icon: "iconsminds-shop",
  //   label: "menu.piaf",
  //   to: `${adminRoot}/piaf`,
  //   subs: [
  //     {
  //       icon: "simple-icon-paper-plane",
  //       label: "menu.start",
  //       to: `${adminRoot}/piaf/start`
  //       // roles: [UserRole.Admin, UserRole.Editor],
  //     }
  //   ]
  // },
  //   // {
  //   id: "pages",
  //   icon: "iconsminds-digital-drawing",
  //   label: "menu.pages",
  //   to: "/user/login",
  //   subs: [
  //     {
  //       icon: "simple-icon-user-following",
  //       label: "menu.login",
  //       to: "/user/login",
  //       newWindow: true
  //     },
  //     {
  //       icon: "simple-icon-user-follow",
  //       label: "menu.register",
  //       to: "/user/register",
  //       newWindow: true
  //     },
  //     {
  //       icon: "simple-icon-user-unfollow",
  //       label: "menu.forgot-password",
  //       to: "/user/forgot-password",
  //       newWindow: true
  //     },
  //     {
  //       icon: "simple-icon-user-following",
  //       label: "menu.reset-password",
  //       to: "/user/reset-password",
  //       newWindow: true
  //     }
  //   ]
  // },
  // {
  //   id: "docs",
  //   icon: "iconsminds-library",
  //   label: "menu.docs",
  //   to: "https://piaf-vue-docs.coloredstrategies.com/",
  //   newWindow: true
  // },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "http://www.codeecuador.com/",
    newWindow: true
  }
];
export default data;
