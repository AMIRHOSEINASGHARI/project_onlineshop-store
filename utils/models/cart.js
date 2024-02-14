const { Schema, models, model } = require("mongoose");

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "StoreDashboardProduct" },
  selectedItems: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "StoreDashboardProduct" },
      qty: { type: Number, default: 0 },
    },
  ],
  totalProducts: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
  totalDiscountPrice: { type: Number, default: 0 },
  checkout: {
    status: Boolean,
    date: {
      type: Date,
      default: () => Date.now(),
      immutabale: true,
    },
  },
  status: { type: String, default: "Pending" },
});

export const StoreShopCart =
  models?.StoreShopCart || model("StoreShopCart", cartSchema);
