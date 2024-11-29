import { useState, useCallback } from "react";
import { updateWorkshopService } from "../services/workshops.service";

export function useUpdateWorkshop() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateWorkshop = useCallback(async ({ id, name, description }) => {
    setLoading(true);
    setLoading(null);
    try {
      await updateWorkshopService({ id, name, description });
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
      throw e;
    }
  }, []);

  return { updateWorkshop, loading, error };
}
