"use client";
import { useState, useEffect } from "react";
import type { SetValue } from "@/types/interfaces/hooks";

/**
 * Custom hook to manage state in localStorage
 * @param key - Key in localStorage
 * @param initialValue - Default value if not found in localStorage
 * @returns [value, setValue] similar to useState
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load after component is mounted
  useEffect(() => {
    if (typeof window === "undefined") {
      setIsHydrated(true);
      return;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item) as T;
        setStoredValue(parsed);
      }
    } catch (error) {
      console.error(`Failed to load ${key} from localStorage:`, error);
    } finally {
      setIsHydrated(true);
    }
  }, [key]);

  // Save to localStorage when value changes (after hydration)
  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Failed to save ${key} to localStorage:`, error);
    }
  }, [key, storedValue, isHydrated]);

  // Function to set value
  const setValue = (value: SetValue<T>) => {
    try {
      // Allow value to be a function to update based on previous value
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
    } catch (error) {
      console.error(`Failed to update ${key} in localStorage:`, error);
    }
  };

  return [storedValue, setValue];
}

/**
 * Hook to load value from localStorage once (no automatic sync)
 */
export function useLocalStorageValue<T>(key: string, initialValue: T): T {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item) as T;
        setValue(parsed);
      }
    } catch (error) {
      console.error(`Failed to load ${key} from localStorage:`, error);
    }
  }, [key]);

  return value;
}

/**
 * Hook to save value to localStorage (no automatic load)
 */
export function useLocalStorageSync<T>(key: string, value: T): void {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to save ${key} to localStorage:`, error);
    }
  }, [key, value]);
}
