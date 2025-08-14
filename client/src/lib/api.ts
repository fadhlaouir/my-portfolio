// Static build configuration - removes server dependencies
export const isStaticBuild = true;

// Mock API functions for static deployment
export const apiRequest = async (endpoint: string, options?: RequestInit) => {
  // For static builds, return empty responses or mock data
  console.log('Static build - API calls disabled:', endpoint);
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  });
};