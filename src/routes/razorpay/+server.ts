// import type { RequestEvent } from "@sveltejs/kit";
// import { json } from "@sveltejs/kit";

// import Razorpay from "razorpay";

// export async function POST(requestEvent: RequestEvent) {
//   const body = await requestEvent.request.json();

//   const { amount } = body;

//   const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID || "",
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });

//   const payment_capture = 1;
//   const currency = "INR";
//   const options = {
//     amount: amount * 100,
//     currency,
//     receipt: Date.now().toString(),
//     payment_capture,

    
//   };
//   try {
//     const response = await razorpay.orders.create(options);
//     return json({ id: response.id, amount: response.amount }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return json({ error: "Internal server error" }, { status: 500 });
//   }
// }
