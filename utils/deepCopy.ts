/**
 * Lusaib Latheef - 13-08/2023
 * Function to deep copy an object or an array.
 * @param obj - Object or array to be deep copied.
 * @returns - Returns the new copy object.
 */
export default function deepCopy<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj as T;
  }

  let copy: any;

  if (obj instanceof File) {
    // Handle File objects
    copy = new File([obj], obj.name, { type: obj.type });
  } else if (obj instanceof Date) {
    // Handle Date objects
    copy = new Date(obj);
  } else if (Array.isArray(obj)) {
    // Handle arrays
    copy = [] as any[];
    for (let i = 0; i < obj.length; i++) {
      copy.push(deepCopy(obj[i]));
    }
  } else {
    // Handle objects
    copy = {} as Record<string, any>;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  }

  return copy as T;
}
