// api/posts.ts
export interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch('/api/posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  };
  
  export const createPost = async (newPost: Post): Promise<Post> => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    });
    if (!response.ok) throw new Error('Failed to create post');
    return response.json();
  };
  