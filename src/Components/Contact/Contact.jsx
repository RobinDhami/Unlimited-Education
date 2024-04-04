import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function Contact() {
    return (
      <section className="px-8  lg:py-16">
        <div className="container mx-auto text-center" id="Contact">
         
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl text-red-500"
          >
            Contact &apos;Us 
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.451194583915!2d85.33163827419483!3d27.73422617616716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19addb24c4f9%3A0x1e5fbe2bdffed944!2sInvest%20%26%20Infra%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1712212513626!5m2!1sen!2snp"
              className="w-full h-full lg:max-h-[510px]"
              loading="lazy"
            />
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
Please Fill the form for more enquiry
            </Typography>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="m-1.5 py-2.5 px-5 rounded-md bg-yellow-300 text-white font-semibold uppercase hover:bg-yellow-400">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
