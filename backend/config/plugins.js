module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_CLOUD_NAME"),
        api_key: env("CLOUDINARY_API_KEY"),
        api_secret: env("CLOUDINARY_API_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "users-permissions": {
    config: {
      register: {
        allowedFields: [
          "name",
          "address",
          "appliedJobs",
          "createdJobs",
          "cv",
          "isCompany",
          "profilePicture",
          "phone",
          "website",
          "bio",
          "acceptedJobs",
          "rejectedJobs",
        ],
      },
    },
  },
});
