// import { url } from '@/config';
// import qs from 'qs';

// export const getBlogsAndTags = async () => {
//     const blog_query = qs.stringify(
//         {
//             select: 'slug description title tags image updatedAt',
//             pageIndex: 0,
//             pageSize: 1,
//             sort: {
//                 createdAt: -1,
//             },
//         },
//         {
//             encodeValuesOnly: true, // prettify URL
//         }
//     );
//     try {
//         const blogs_res = await fetch(url + '/api/api-blogs?' + query, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
//             },
//         });
//         const { data: blogs } = await blogs_res.json();
//         return blogs;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// };
