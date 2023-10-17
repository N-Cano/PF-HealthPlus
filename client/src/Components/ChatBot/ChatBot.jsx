import { useTranslation } from "react-i18next";
import { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "./ChatBot.css";

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: "Greet",
      message: t("CHATBOT.GREET.MESSAGE"),
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: t("CHATBOT.ASK NAME.MESSAGE"),
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: t("CHATBOT.NAME.MESSAGE"),
      trigger: "Help1",
    },
    {
      id: "Help1",
      message: t("CHATBOT.HELP1.MESSAGE"),
      trigger: "options",
    },
    {
      id: "options",
      options: [
        {
          value: "Services",
          label: t("CHATBOT.OPTIONS.SERVICES"),
          trigger: "Services",
        },
        {
          value: "Login",
          label: t("CHATBOT.OPTIONS.LOGUIN"),
          trigger: "Login",
        },
        {
          value: "Subscribes",
          label: t("CHATBOT.OPTIONS.SUBSCRIBES"),
          trigger: "Subscribes",
        },
        {
          value: "Schedule",
          label: t("CHATBOT.OPTIONS.SCHEDULE"),
          trigger: "Schedule",
        },
        { value: "Dates", label: t("CHATBOT.OPTIONS.DATES"), trigger: "Dates" },
        {
          value: "Profile",
          label: t("CHATBOT.OPTIONS.PROFILE"),
          trigger: "Profile",
        },
      ],
    },
    {
      id: "Login",
      message: t("CHATBOT.LOGUIN.MESSAGE"),
      trigger: "Help2",
    },
    {
      id: "Services",
      message: t("CHATBOT.SERVICES.MESSAGE"),
      trigger: "Help2",
    },
    {
      id: "Subscribes",
      message: t("CHATBOT.SUBSCRIBES.MESSAGE"),
      trigger: "Help2",
    },
    {
      id: "Schedule",
      message: t("CHATBOT.SCHEDULE.MESSAGE"),
      trigger: "Help2",
    },
    {
      id: "Dates",
      message: t("CHATBOT.DATES.MESSAGE"),
      trigger: "Help2",
    },
    {
      id: "Profile",
      message: t("CHATBOT.PROFILE.MESSAGE"),
      trigger: "Help2",
    },
    {
      id: "Help2",
      message: t("CHATBOT.HELP2.MESSAGE"),
      trigger: "options2",
    },
    {
      id: "options2",
      options: [
        { value: "Yes", label: t("CHATBOT.OPTIONS2.YES"), trigger: "Yes" },
        { value: "No", label: "No", trigger: "No" },
      ],
    },
    {
      id: "Yes",
      message: " Okey",
      trigger: "Help1",
    },
    {
      id: "No",
      message: t("CHATBOT.NO.MESSAGE"),
      end: true,
    },
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="floating-chatbot">
            <ChatBot steps={steps} bubbleStyle={{ fontSize: "15px" }} />
          </div>
        )}
      </div>
      <button className="open-chatbot-btn" onClick={toggleChatbot}>
        {isOpen ? "Close" : "Help"}
      </button>
    </div>
  );
};

export default Chatbot;
