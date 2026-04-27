import express from "express";

const router = express.Router();

// GET /api/items - Retrieve all items
router.get("/", (req, res) => {
  res.json({ message: "Get all items" });
});

// GET /api/items/:id - Retrieve a single item by ID
router.get("/:id", (req, res) => {
  res.json({ message: `Get item with id ${req.params.id}` });
});

// POST /api/items - Create a new item
router.post("/", (req, res) => {
  res.status(201).json({ message: "Create a new item", data: req.body });
});

// PUT /api/items/:id - Update an existing item by ID
router.put("/:id", (req, res) => {
  res.json({ message: `Update item with id ${req.params.id}`, data: req.body });
});

// DELETE /api/items/:id - Delete an item by ID
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete item with id ${req.params.id}` });
});

export default router;
