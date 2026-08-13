# Controllers

Place your Express route controllers here.

Generally, routes would take care of deserializing incoming data (retrieving body, headers, query params from request) passing this clean, mapped data to controller, which would handle data properly and returning data back to route, where route would then decide how to formulate response (status code, headers, body)