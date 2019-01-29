export default function validateHandler(obj) {
  return (req, res, next) => {
    const key = Object.keys(obj);

    key.forEach(element => {
      const item = obj[element];

      const value = item.in.map(items => {
        return req[items][element];
      });

      const validateValue = value.filter(abc => abc);
      console.log(validateValue);
      if (item && item.required) {
        console.log("item is checked");
        if (validateValue.length !== value.length) {
          next({
            error: "VALIDATION ERROR",
            message: `${element} is required`,
            status: 422
          });
        }
        if (item.string) {
          console.log("string is checked");
          if (typeof validateValue[0] !== "string") {
            next({
              error: "VALIDATION ERROR",
              message: `${element} is not string`,
              status: 422
            });
          }
        }
        if (item.regex) {
          console.log("regex is checked");
          if (!item.regex.test(validateValue[0])) {
            next({
              error: "VALIDATION ERROR",
              message: `${element} is not a regex expression`,
              status: 422
            });
          }
        }
        if (item.isObject) {
          console.log("object is checked");
          if (typeof validateValue[0] !== "object") {
            next({
              error: "VALIDATION ERROR",
              message: `${element} is not an object`,
              status: 422
            });
          }
        }
        if (item.custom) {
          item.custom(5);
        }
      } else {
        if (item.number) {
          console.log("number is checked");
          console.log("Default value is ", item.default);
        }
      }
      console.log("-------------------------------------------");
    });
    next();
  };
}
