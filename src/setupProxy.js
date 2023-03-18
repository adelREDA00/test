import { useSelector } from "react-redux";

const proxy = require("http-proxy-middleware");
const user = useSelector((state) => state.user.value);
module.exports = function(app) {
  app.use(
    proxy("/js", {
      target: "https://adell.pythonanywhere.com",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    proxy(`/${user.id}`, {
      target: "https://adell.pythonanywhere.com",
      secure: false,
      changeOrigin: true
    })
  );
  app.use(
    proxy("/pass", {
      target: "https://adell.pythonanywhere.com",
      secure: false,
      changeOrigin: true
    })
  );


};