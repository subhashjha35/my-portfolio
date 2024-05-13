export type DevToArticles = DevToArticleDetails[]

export interface DevToArticleDetails {
  type_of: string
  id: number
  title: string
  description: string
  published: boolean
  published_at: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  page_views_count: number
  published_timestamp: string
  body_markdown: string
  positive_reactions_count: number
  cover_image: any
  tag_list: string[]
  canonical_url: string
  reading_time_minutes: number
  user: User
}

export interface User {
  name: string
  username: string
  twitter_username: any
  github_username: string
  user_id: number
  website_url: any
  profile_image: string
  profile_image_90: string
}


export type Response<T = any> = {
  result: T,
  length: number
}

export const gitRepos: Response<{ name: string }> = {
  length: 34,
  result: { name: 'abc' }
}

export const getRepos = <T>(name: T): { length: number; repos: T[] } => ({
  length: 12,
  repos: [],
})
