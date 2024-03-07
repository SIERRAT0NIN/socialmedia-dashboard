import React, { createContext, useState, useContext } from "react";
const SocialContext = createContext();

export const SocialProvider = ({ children }) => {
  const [linkedInPost, setLinkedInPost] = useState("");
  const [twitterPost, setTwitterPost] = useState("");
  const [instagramPost, setInstagramPost] = useState("");
  const [mediumPost, setMediumPost] = useState("");
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const secretId = import.meta.env.VITE_SECRET_ID;
  console.log(clientId);
  console.log(secretId);

  // const fetchAccessToken = async (code) => {
  //   const redirectUri = "http://localhost:5173/callback";

  //   // The URL for the token request
  //   const tokenUrl = "https://www.linkedin.com/oauth/v2/accessToken";

  //   const params = new URLSearchParams({
  //     grant_type: "authorization_code",
  //     code: code,
  //     redirect_uri: redirectUri,
  //     client_id: clientId,
  //   });

  //   try {
  //     const response = await fetch(tokenUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: params,
  //     });

  //     const data = await response.json();
  //     if (data.access_token) {
  //       console.log("Access Token:", data.access_token);
  //     } else {
  //       console.error("Failed to obtain access token:", data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching access token:", error);
  //   }
  // };
  const handleAuthorizationCode = async (code) => {
    try {
      const response = await fetch("https://api.linkedin.com/v2/ugcPosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      console.log("Token received from server:", data.token);
      // Proceed to use the token as needed
    } catch (error) {
      console.error("Error fetching access token from server:", error);
    }
  };
  handleAuthorizationCode();
  const fetchLinkedInPosts = async () => {
    const accessToken = "YOUR_ACCESS_TOKEN";
    try {
      const response = await fetch("LINKEDIN_API_ENDPOINT_FOR_POSTS", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setLinkedInPost(data);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      return null;
    }
  };

  return (
    <SocialContext.Provider
      value={{
        linkedInPost,
        setLinkedInPost,
        twitterPost,
        setTwitterPost,
        instagramPost,
        setInstagramPost,
        mediumPost,
        setMediumPost,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};
export const useSocial = () => useContext(SocialContext);
