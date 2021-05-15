const parseRequest_url = () => {
  document.location.hash = "/dakd/adlkfad/dakhfjda";

  const url = document.location.hash.toLowerCase();
  const request = url.split("/");
  console.log(url, request);

  return {
    resource: request[1],
    id: request[2],
    verb: request[3],
  };
};

export default parseRequest_url;
