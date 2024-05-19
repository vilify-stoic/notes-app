const getUuid = () => {
    return Date.now() + '' + Math.floor(Math.random() * 15);
  };
  
export default getUuid;
  