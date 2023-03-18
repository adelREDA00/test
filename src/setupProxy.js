import { useSelector } from "react-redux";

const proxy = require("http-proxy-middleware");
const user = useSelector((state) => state.user.value);
module.exports = function(app) {
  app.use(
    proxy("/js", {
      target: "http://adell.pythonanywhere.com",
      changeOrigin: true
    })
  );

  app.use(
    proxy(`/${user.id}`, {
      target: "http://adell.pythonanywhere.com",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/pass", {
      target: "http://adell.pythonanywhere.com",
      changeOrigin: true
    })
  );


};