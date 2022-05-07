import { router } from "../../core";

router.get("/", (req, res) => {
  res.send(`Hello from router ${req.baseUrl}`);
});

export default router;
