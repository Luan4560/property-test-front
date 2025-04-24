/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ListProperties from "@/components/ListProperties";
import api from "@/services/api";
import styles from "../page.module.css";
import useListPropertiesStore from "@/store/useListPropertiesStore";
import { useEffect } from "react";
import useAuth from "@/store/useAuth";

export async function getProperties() {
  const response = await api.get("/properties");
  return response.data;
}

export default function Home() {
  const { properties, fetchProperties } = useListPropertiesStore();
  const { accessToken: isAuthenticated } = useAuth();

  useEffect(() => {
    fetchProperties();
  }, [isAuthenticated]);

  return (
    <div className={styles.page}>
      <ListProperties initialProperties={properties} />
    </div>
  );
}
