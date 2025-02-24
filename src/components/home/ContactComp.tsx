import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";

// Replace with the correct path to your SVG in Vite
// import avatar from "../assets/avatar-form-contact.svg";

// 1) Define Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  mail: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().max(2000).optional(),
});

// 2) Infer the TypeScript type from the Zod schema
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactComp() {
  // 3) Get translation & locale from react-i18next
  //    If you have a "Contact" namespace, use useTranslation("Contact")
  const { t, i18n } = useTranslation();
  const locale = i18n.language; // e.g. "en", "ar", etc.

  // 4) Set up React Hook Form with Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // 5) Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Submitting form:", data);

      // Send form data to your backend endpoint
      const response = await axios.post(
        "https://corporatefix.net/backend/api/websiteLead",
        data
      );
      console.log("Form submitted successfully:", response.data);

      Swal.fire({
        title: "Good job!",
        text: "success!",
        icon: "success",
      });

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <section className="w-full lg:px-[90px] mb-20">
      <div className="min-h-screen rounded-lg bg-white flex flex-col lg:flex-row">
        {/* Left Side (Form) */}
        <div
          className={`w-full lg:w-1/2 p-4 lg:p-8 xl:p-12 ${
            locale === "ar" ? "rtl" : "ltr"
          }`}
        >
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              {t("Contact.title")}
            </h2>

            {/* Avatar and Greeting */}
            {/* <div className="flex items-center gap-3 mb-8">
              <img
                src={avatar}
                alt={t("imageAlt.avatar") as string}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-sm text-gray-600">{t("greeting")}</p>
            </div> */}

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("Contact.form.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder={t("Contact.form.name.placeholder") as string}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("Contact.form.email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("mail")}
                  className={`w-full px-4 py-2 border ${
                    errors.mail ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.mail ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                  placeholder={t("Contact.form.email.placeholder") as string}
                />
                {errors.mail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mail.message}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("Contact.form.phone.label")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t("Contact.form.phone.placeholder") as string}
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("Contact.form.message.label")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                  placeholder={t("Contact.form.message.placeholder") as string}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0d519d] text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting
                  ? "Submitting..."
                  : t("Contact.form.submitButton")}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side (Map) */}
        <div className="w-full lg:p-10 p-4 lg:max-w-[750px] h-[550px] lg:h-[700px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=your-map-embed-url"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
