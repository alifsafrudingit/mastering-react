import React from "react";

export default function ShippingDetails() {
  return (
    <div class="w-full md:px-4 md:w-4/12" id="shipping-detail">
      <div class="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
        <form action="success.html">
          <div class="flex flex-start mb-6">
            <h3 class="text-2xl">Shipping Details</h3>
          </div>

          {/* <!-- START: Input complete name --> */}
          <div class="flex flex-col mb-4">
            <label for="complete-name" class="text-sm mb-2">
              Complete Name
            </label>
            <input
              data-input
              type="text"
              id="complete-name"
              class="border border-gray-200 rounded-xl px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your name"
            />
          </div>
          {/* <!-- END: Input complete name --> */}
          {/* <!-- START: Input email address --> */}
          <div class="flex flex-col mb-4">
            <label for="email" class="text-sm mb-2">
              Email Address
            </label>
            <input
              data-input
              type="email"
              id="email"
              class="border border-gray-200 rounded-xl px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your email address"
            />
          </div>
          {/* <!-- END: Input email address --> */}
          {/* <!-- START: Input address --> */}
          <div class="flex flex-col mb-4">
            <label for="address" class="text-sm mb-2">
              Address
            </label>
            <input
              data-input
              type="text"
              id="address"
              class="border border-gray-200 rounded-xl px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your address"
            />
          </div>
          {/* <!-- END: Input address --> */}
          {/* <!-- START: Input phone number --> */}
          <div class="flex flex-col mb-4">
            <label for="phone-number" class="text-sm mb-2">
              Phone Number
            </label>
            <input
              data-input
              type="tel"
              id="phone-number"
              class="border border-gray-200 rounded-xl px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your phone number"
            />
          </div>
          {/* <!-- END: Input phone number --> */}

          {/* <!-- START: Choose courier --> */}
          <div class="flex flex-col mb-4">
            <label class="text-sm mb-2">Choose Courier</label>
            <div class="flex flex-wrap -mx-2">
              {/* <!-- START: Courier 1 --> */}
              <div class="px-2 w-6/12 h-24">
                <button
                  data-value="fedex"
                  data-name="courier"
                  type="button"
                  class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/images/content/courier/logo-fedex.png"
                    alt="fedex"
                    class="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- END: Courier 1 --> */}
              {/* <!-- START: Courier 2 --> */}
              <div class="px-2 w-6/12 h-24">
                <button
                  data-value="dhl"
                  data-name="courier"
                  type="button"
                  class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/images/content/courier/image-dhl.png"
                    alt="dhl"
                    class="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- END: Courier 2 --> */}
            </div>
          </div>
          {/* <!-- END: Choose courier --> */}

          {/* <!-- START: Choose payment --> */}
          <div class="flex flex-col mb-4">
            <label class="text-sm mb-2">Choose Payment</label>
            <div class="flex flex-wrap -mx-2">
              {/* <!-- START: choose payment 1 --> */}
              <div class="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="midtrans"
                  data-name="payment"
                  type="button"
                  class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/images/content/payment/image-midtrans.png"
                    alt="midtrans"
                    class="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- END: choose payment 1 --> */}
              {/* <!-- START: choose payment 2 --> */}
              <div class="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="mastercard"
                  data-name="payment"
                  type="button"
                  class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/images/content/payment/image-master-card.png"
                    alt="mastercard"
                    class="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- END: choose payment 2 --> */}
              {/* <!-- START: choose payment 3 --> */}
              <div class="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="bitcoin"
                  data-name="payment"
                  type="button"
                  class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/images/content/payment/image-bitcoin.png"
                    alt="bitcoin"
                    class="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- END: choose payment 3 --> */}
              {/* <!-- START: choose payment 4 --> */}
              <div class="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="american-express"
                  data-name="payment"
                  type="button"
                  class="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/images/content/payment/image-american-express.png"
                    alt="american-express"
                    class="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- END: choose payment 4 --> */}
            </div>
          </div>
          {/* <!-- END: Choose payment --> */}

          <div class="text-center">
            <button
              type="submit"
              disabled
              class="bg-pink-400 text-black text-lg focus:text-pink-400 focus:bg-black focus:outline-none rounded-full w-full py-3 transition-all duration-200 px-6"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
