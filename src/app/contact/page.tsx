"use client";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { useState } from "react";
import { Spinner } from 'flowbite-react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data?.success) {
        setAlert({
          show: true,
          message: "Email sent successfully! We will get back to you soon.",
          type: "success",
        });
      } else if (data?.success === false) {
        setAlert({
          show: true,
          message: "Failed to send email. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlert({
        show: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container my-24 mx-auto md:px-6 relative">
      <section className="mb-32">
        <div className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('/images/SacState_Zoom_Planetarium.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[450px] md:-mt-[350px] sm:-mt-[250px] xs:-mt-[150px] backdrop-blur-[30px] relative z-2">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 z-10">
                <form
                  onSubmit={handleSubmit}
                  className="w-full mx-auto md:max-w-lg"
                >
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-500 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-50 focus:outline-none peer-focus:text-primary-500 dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary-500 dark:peer-focus:text-primary-500 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="contactEmailInput"
                      placeholder="name@example.com"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <label
                      htmlFor="contactEmailInput"
                      className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary-500 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary-500"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-500 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-50 focus:outline-none peer-focus:text-primary-500 dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary-500 dark:peer-focus:text-primary-500 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="contactNameInput"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <label
                      htmlFor="contactNameInput"
                      className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary-500 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary-500"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding py-[0.32rem] px-3 leading-[1.6] text-neutral-700 transition duration-200 ease-linear  placeholder:text-transparent focus:border-primary-500 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-50 focus:outline-none peer-focus:text-primary-500 dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary-500 dark:peer-focus:text-primary-500 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="contactMessgaeTextArea"
                      rows={3}
                      placeholder="Your message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                    <label
                      htmlFor="contactMessgaeTextArea"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] border border-solid border-transparent truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-1 peer-focus:scale-[0.85] peer-focus:text-primary-500 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary-500"
                    >
                      Message
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-6 inline-block w-full rounded bg-primary-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0 4px 9px -4px #3b71ca] ease-in-out transition-shadow duration-150 hover:bg-primary-600 hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                  >
                    {isSubmitting ? <div><Spinner /></div> : "Send"}
                  </button>
                  {alert.show && (
                    <div
                      className={`mt-3 mb-3 inline-flex w-full items-center rounded-lg px-6 py-1 text-base text-neutral-50 ${
                        alert.type === "success"
                          ? "bg-neutral-500"
                          : "bg-red-500"
                      }`}
                      role="alert"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          {alert.type === "success" ? (
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          ) : (
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM11.25 7.5a.75.75 0 011.5 0v6a.75.75 0 11-1.5 0V7.5zm.75 9a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                              clipRule="evenodd"
                            />
                          )}
                        </svg>
                      </span>
                      {alert.message}
                    </div>
                  )}
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 flex justify-center items-center z-10">
                <div className="flex flex-wrap justify-center">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="text-center">
                        <p className="mb-2 text-2xl font-bold dark:text-white text-white">
                          Contact Us
                        </p>
                        <p className="text-lg text-neutral-500 dark:text-neutral-200">
                          If you have any questions or concerns, feel free to
                          contact us by sending a message here.
                        </p>
                        <p className="mt-20 text-lg text-neutral-500 dark:text-neutral-200">
                          Alternatively, you can reach out to us on Discord.
                        </p>
                        <div className="mt-6">
                          <a
                            href="https://discord.gg/mJs6e6KFTa"
                            role="button"
                            className="flex justify-center"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 text-discord"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-1 max-sm:hidden" />
          </div>
        </div>
      </section>
    </div>
  );
}
