export default (url: any) => {
  const paramString = url.includes("?") ? url.split("?")[1].split("&") : [];
  const params: { [key: string]: string } = {};

  paramString.forEach((param: any) => {
    const paramSplit = param.split("=");
    params[paramSplit[0]] = paramSplit[1];
  });

  return params;
};
