import React from "react";
import { Link } from "react-router-dom";

function CollectionBanner() {
  return (
    <div>
      <div class="bg-white py-12 sm:py-8 lg:py-24">
        <div class="mx-auto max-w-screen-full  px-4 md:px-8">
          <div class="grid gap-6 sm:grid-cols-2">
            <Link
              to="/trending"
              href="!#"
              class="group relative flex h-96 items-end overflow-hidden rounded bg-gray-100 p-4 shadow-md"
            >
              <img
                src="https://previews.dropbox.com/p/thumb/ACDhBvY8GZcxMIuvs7v8tIGsnR6pyWKv7vHOv01DtNoqVZzQC02HVAvsg2_RERi6zyqk7N_KCq7ZwCPwo2Pot23YFRfAZKzXtZ1vaSUeNT7y-hPceP9wWO7toqOOP1YQ2A0e0pgSxyMb_vstNmITqYCGCL48Juom0rwEYeFlFOH5BAIHGjrsnh-6S-BAO4zfS_4cj8IeoxPQkZF1Ot2WY2gBCqB6nWE0WIF4sr38Ze5SPpqt6ofa4aZxkudTRWSKzUdjpNxqLsLG6sYubqPPEQOo4-W25ZYcjxjpLsLbHo22XRhbZNSpQ790t_RYNDLhbLnuG-7vTF6DBaHfIR2cLDHF/p.jpeg"
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              {/* <div class="relative flex flex-col">
                <span class="text-gray-300">Home</span>
                <span class="text-lg font-semibold text-white lg:text-xl">
                  Decoration
                </span>
              </div> */}
            </Link>

            <Link
              to="/newarrival"
              class="group relative flex h-96 items-end overflow-hidden rounded bg-gray-100 p-4 shadow-md"
            >
              <img
                src="https://previews.dropbox.com/p/thumb/ACCml6lPjadTbCDcPQBmcekmVVdmKe5CSWcLZKZhdXPpLG3Orp2XdckBgrurC83BFQgtCzDTvXeti9NSIYtRabGCr2KJthXDM8gtfNUX2CaLoL4NeFbuPj6cOYQ5WJIq-uNhkfo7R1bcsJzqmy0M1ReTjczQMGCkbjxUwfU9cu4TOBSPgm9n2GMajGrPUUHXUFSfOVCCraMHqsImZQiTe5gwtszTVTpJIn-MVZctFSrLIs8k4kaqUS3EAbq731sZtATdDr_UNNMvMEWS6wv8N3cab8RfH66wkJ5EGkuEJCwIEiDZngPRV2sfUhpGf5WMTzL9-3vb-qPxta6PfoSrATpKtywo_mgB_Vim7iwwjJpRXw/p.jpeg"
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              {/* <div class="relative flex flex-col">
                <span class="text-gray-300">Modern</span>
                <span class="text-lg font-semibold text-white lg:text-xl">
                  Furniture
                </span>
              </div> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionBanner;
