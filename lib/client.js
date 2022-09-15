import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '7ji0nyw9',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-09-14',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);