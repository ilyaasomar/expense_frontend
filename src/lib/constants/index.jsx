import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "add-transaction",
    label: "New Transaction",
    path: "/add-transaction",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },

  {
    key: "deposit-report",
    label: "Deposit Report",
    path: "/depost-reports",
    icon: <HiOutlineDocumentText />,
  },

  {
    key: "expense-report",
    label: "Expense Report",
    path: "/expense-reports",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "users",
    label: "User Info",
    path: "/users",
    icon: <HiOutlineCube />,
  },
  {
    key: "input-groups",
    label: "Input Groups",
    path: "/input-group",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "element-form",
    label: "Element Form",
    path: "/element-form",
    icon: <HiOutlineDocumentText />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
