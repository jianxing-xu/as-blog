
import { getCollection } from 'astro:content'

interface IF {
	bug?: boolean
	review?: boolean
	project?: boolean
}
export async function getAllPosts({ review, bug, project }: IF = {}) {
	let posts = await getCollection('blog')
	if (review) {
		posts = posts.filter(it => it.data.review);
	}
  if (bug) {
		posts = posts.filter(it => it.data.review);
	}
  if (project) {
		posts = posts.filter(it => it.data.review);
	}
	return posts.sort((a,b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}
export function yearStr(post: any, prePost: any) {
  if (
    !prePost ||
    post.data.pubDate.getFullYear() < prePost.data.pubDate.getFullYear()
  ) {
    return post.data.pubDate.toLocaleDateString("en-US", {
      year: "numeric",
    });
  }
}