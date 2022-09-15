import { roomStatusList } from "@/mocks";

export const vi = {
  roomStatusList: [
    { id: 1, status: "Trống", color: "#fbfaf5" },
    { id: 2, status: "Chưa checkin", color: "#89c3eb" },
    { id: 3, status: "Đang có khách", color: "#f8b500" },
    { id: 4, status: "Đã checkout", color: "#b79a5b" }
  ],
  headerButton: [
    { id: 1, keyButton: "F1", label: "▼", type: "decreasePage" },
    { id: 2, keyButton: "F3", label: "▲", type: "increasePage" },
    {
      id: 3,
      keyButton: "F4",
      label: "Ẩn checkout",
      secondLabel: "Hiện checkout",
      type: "hideCheckout"
    },
    { id: 4, keyButton: "F5", label: "Làm mới", type: "refresh" },
    { id: 6, keyButton: "F12", label: "EN", type: "changeLocale" }
  ]
};

export const en = {
  headerButton: [
    { id: 1, keyButton: "F1", label: "▼", type: "decreasePage" },
    { id: 2, keyButton: "F3", label: "▲", type: "increasePage" },
    {
      id: 3,
      keyButton: "F4",
      label: "Hide checkout",
      secondLabel: "Present checkout",
      type: "hideCheckout"
    },
    { id: 4, keyButton: "F5", label: "Refresh", type: "refresh" },
    { id: 6, keyButton: "F12", label: "VI", type: "changeLocale" }
  ]
};
en.roomStatusList = roomStatusList;

const locales = { vi, en };
export default locales;
