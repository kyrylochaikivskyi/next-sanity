import React from "react";

import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import styles from "./not-found.module.scss";

export const revalidate = 30;

export default function NotFound() {
  return (
    <div className={`flex ml-auto ${styles.container}`}>
      <h1
        className="text-7xl text-center"
      >
        404
      </h1>
      <p className="text-center">
        You didn&apo;t break the internet, but we can&apos;t find what you are looking for.
      </p>
      <ClientSideRoute
        className={`mt-5 font-bold flex items-center ${styles.button}`}
        route="/"
      >
        Visit Homepage
        <ArrowUpRightIcon
          className={`ml-2 h-4 w-4 ${styles.icon}`}
        />
      </ClientSideRoute>
    </div>
  )
}
