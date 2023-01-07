import jwt_decode from "jwt-decode";

export default function handleCredentialResponse(response:any) {
    console.log(response);
    const responsePayload:any = getDecodedAccessToken(response); // decode token
    const expireDate = responsePayload.exp; // get token expiration dateTime

    console.log("ID: " + responsePayload.sub);
    console.log("Full Name: " + responsePayload.name);
    console.log("Given Name: " + responsePayload.given_name);
    console.log("Family Name: " + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
  }

function getDecodedAccessToken(token:string) {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }