"use client";
import { Button, Modal, Tooltip } from "flowbite-react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CheckIcon } from "@heroicons/react/outline";
import { useState } from "react";
import SectionDivider from "@/components/section-divider";
import { eventsData } from "@/app/events/eventData";
import React from "react";
import Event from "./event";
import type { CustomFlowbiteTheme } from "flowbite-react";
import Alert from '@mui/material/Alert';


const customTheme: CustomFlowbiteTheme["button"] = {
  outline: {
    on: "flex w-full justify-center transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit bg-gray-900 text-white",
  },
};

export default function Events() {
  const [openModal, setOpenModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const icsLink =
    "https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/26e86ea4-d215-49fa-8662-9284e5d13e05/cid-637F1134BABD7C29/calendar.ics";

  const copyLinkToClipboard = async () => {
    await navigator.clipboard.writeText(icsLink);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000); // Show copied status for 2 seconds
  };

  return (
    <div className="container mx-auto px-4 py-28">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
        Upcoming Events
      </h1>
      <Alert severity="info" className="mb-4 w-full max-w-6xl mx-auto rounded-lg shadow-lg">
        Next Event is TBD, Subscribe to never miss an event
      </Alert>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto">
          <iframe
            src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/26e86ea4-d215-49fa-8662-9284e5d13e05/cid-637F1134BABD7C29/index.html"
            style={{ border: 0 }}
            width="100%"
            height="600"
            className="mx-auto rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="mt-6 mb-12">
          <Button
            theme={customTheme}
            outline
            gradientDuoTone="purpleToBlue"
            size="lg"
            className="mx-auto text-sm sm:text-base"
            onClick={() => setOpenModal(true)}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <Modal
        theme={{
          root: {
            show: {
              on: "flex bg-gray-900 bg-opacity-80",
            },
          },
          content: {
            inner:
              "relative rounded-lg shadow bg-gray-900 flex flex-col max-h-[90vh]",
          },
          header: {
            base: "flex items-start justify-between rounded-t border-b p-5 border-gray-600",
          },
        }}
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="md"
      >
        <Modal.Header>
          <div className="text-xl font-semibold text-white">
            How to Subscribe to Our Calendar
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="text-gray-400 space-y-4">
            <div>
              <label className="text-base font-medium">
                Use the link below to subscribe in your preferred calendar
                application:
              </label>
              <div className="w-full relative mt-3 mb-10">
                <input
                  type="text"
                  value={icsLink}
                  readOnly
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-12 cursor-default disabled:bg-gray-50"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Tooltip
                    content={copySuccess ? "Copied!" : "Copy to clipboard"}
                    placement="top-end"
                  >
                    <button
                      onClick={copyLinkToClipboard}
                      className={`text-gray-800 hover:bg-gray-100 rounded-lg p-2 ${
                        copySuccess ? "bg-gray-200" : ""
                      }`}
                    >
                      {copySuccess ? (
                        <CheckIcon className="w-4 h-4 text-blue-500" />
                      ) : (
                        <ContentCopyIcon fontSize="small" />
                      )}
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div>
              <label className="text-base font-medium">
                Alternatively, download the ICS file and import it into your
                calendar:
              </label>
              <div className="mt-2">
                <Button
                  href={icsLink}
                  color="light"
                  theme={{
                    color: {
                      light:
                        "border focus:ring-4 border-gray-600 bg-gray-600 text-white focus:ring-gray-700 enabled:hover:border-gray-700 enabled:hover:bg-gray-700",
                    },
                  }}
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="flex flex-col items-center justify-center">
        {" "}
        {/* Start of events */}
        <SectionDivider />
        <h2 className="text-3xl capitalize text-center text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          {" "}
          Events & Plans
        </h2>
        <div>
          {eventsData &&
            eventsData.map((event, index) => (
              <React.Fragment key={index}>
                <Event {...event} />
              </React.Fragment>
            ))}
        </div>
      </div>{" "}
      {/* End of events */}
    </div>
  );
}
