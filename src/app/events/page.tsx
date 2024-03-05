"use client";
import { Button, Modal, Tooltip } from "flowbite-react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CheckIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Events() {
  const [openModal, setOpenModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const icsLink =
    "https://outlook.office365.com/owa/calendar/1c470c05022745f382e100df46570c61@csus.edu/0d8046b2c9ac438db7419638d2f167cb8821207429198934719/calendar.ics";

  const copyLinkToClipboard = async () => {
    await navigator.clipboard.writeText(icsLink);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000); // Show copied status for 2 seconds
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <div
        className="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 backdrop-blur-[30px]
      bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-gray-900 dark:to-transparent"
      >
        <h1 className="text-center text-4xl font-bold mb-8 text-white">
          Upcoming Events
        </h1>
        <div className="flex flex-col items-center">
          <iframe
            src="https://outlook.office365.com/owa/calendar/1c470c05022745f382e100df46570c61@csus.edu/0d8046b2c9ac438db7419638d2f167cb8821207429198934719/calendar.html"
            style={{ border: 0 }}
            width="100%"
            height="600"
            className="mx-auto"
          ></iframe>
          <div className="self-end mt-4">
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              size="lg"
              className="mx-auto mt-4"
              onClick={() => setOpenModal(true)}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Modal
          theme={{
            content: {
              inner:
                "relative rounded-lg bg-white shadow dark:bg-gray-900 flex flex-col max-h-[90vh]",
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
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 pr-12 cursor-default"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Tooltip
                      content={copySuccess ? "Copied!" : "Copy to clipboard"}
                      placement="top-end"
                    >
                      <button
                        onClick={copyLinkToClipboard}
                        className={`text-gray-500 hover:bg-gray-100 rounded-lg p-2 ${
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
                  <Button href={icsLink} color="light">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
