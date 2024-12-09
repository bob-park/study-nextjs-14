// server component 인 경우 이렇게 저장함 (caching 함)
export async function getPostRecommands() {
  const res = await fetch(`http://localhost:9090/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'], // update 해줄때 key
    },
    // cache 안할때
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
