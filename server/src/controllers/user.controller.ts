// A controller receives the incoming request, extracts the data it needs, passes that data to a service, and sends back the response. It should not contain business logic or direct database calls.

// // src/controllers/user.controller.js
// import * as userService from "../services/user.service.js";

// export async function getUser(req, res, next) {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// }

//Rule of thumb: If you see a database query or a complex conditional inside a controller, move it to the service layer.
