export const methodLoger = (req, res, next) => {
  console.log(`🚀 ~url:`, req.url);
  console.log(`🚀 ~ method:`, req.method);
  next();
};

// export default methodLoger;
