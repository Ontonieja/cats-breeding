const convertStringToBinary = (file: string) => {
  const base64Data = file.replace(/^data:image\/\w+;base64,/, '');

  // Decode Base64 to binary data
  return Buffer.from(base64Data, 'base64');
};

export default convertStringToBinary;
