"use client";
import { Button, Modal, Tooltip } from "flowbite-react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CheckIcon } from "@heroicons/react/outline";
import { useState } from "react";
import SectionDivider from "@/components/section-divider";
import { projectsData } from "@/app/events/eventData";
import React from "react";
import Project from "./event";


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
        <div className="mt-6">
          <Button
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
          content: {
            inner: "relative rounded-lg bg-white shadow dark:bg-gray-900 flex flex-col max-h-[90vh]",
          },
        }}
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="md"
      >
        <Modal.Header>
          <div className="text-xl font-semibold text-gray-700 dark:text-white">
            How to Subscribe to Our Calendar
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="text-gray-500 dark:text-gray-400 space-y-4">
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
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-12 cursor-default" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Tooltip
                    content={copySuccess ? "Copied!" : "Copy to clipboard"}
                    placement="top-end"
                  >
                    <button
                      onClick={copyLinkToClipboard}
                      className={`text-gray-500 hover:bg-gray-100 rounded-lg p-2 ${copySuccess ? "bg-gray-200" : ""}`}
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
                <Button href={icsLink} color="light">
                  Download
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="flex flex-col items-center justify-center"> {/* Start of events */}

      <SectionDivider />     

      <h2 className="text-3xl capitalize text-center text-white sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8" > Events </h2>

      <div>
        {projectsData && projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      </div> {/* End of events */}
                 
    </div>

  );
}

