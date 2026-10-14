# Bobby's Super Whip photo manager

The admin page is at `/admin/photos`. It manages two Cloudinary collections:
- **Main gallery** (`bobbys-gallery`)
- **Customer photos** (`bobbys-customers`)

The site continues to use the existing local photos until a collection has managed Cloudinary photos. Once at least one managed photo exists for a collection, that collection uses its Cloudinary photos on the public website. **Before uploading the first managed photo to a collection, upload all the photos you want that collection to show**, otherwise the public site will switch to the managed set and any remaining local-only photos will no longer show in that collection.

## 1. Create Cloudinary storage

1. Create/sign in to a Cloudinary account at https://cloudinary.com/.
2. In the Cloudinary dashboard, find the product environment's **Cloud name**, **API Key**, and **API Secret**.
3. Do not share the API Secret publicly.

## 2. Configure environment variables

Add the following variables both to your local `.env.local` file and to your Vercel project's Settings → Environment Variables. Use the same values in both places:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

Generate a strong session secret using Node.js:

```powershell
node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"
```

Set `ADMIN_PASSWORD` to a strong, unique password. Do not use your email password. The session secret must be at least 32 characters. Restart the local dev server after editing `.env.local`, and redeploy on Vercel after adding the production variables.

## 3. Deploy the project changes

Copy the new and updated files from this project into the existing repository, preserving unrelated files. Do not replace your real `.env.local` with `.env.example`.

Test locally with `npm run dev` and visit `http://localhost:3000/admin/photos`. Once it works locally, commit and push the changes to `main` so Vercel can deploy them.

## 4. Move the current photos into managed storage

The admin page initially shows an empty Cloudinary collection because existing images currently live in the repository.

Before uploading any new photos, use `/admin/photos` to upload the existing photos you want to keep:
- Main gallery: the eight existing images from `public/images/gallery/`.
- Customer photos: the four images from `public/images/Customers/on website/`.

Select multiple files in the relevant category and upload them together. Do not upload private/customer photos you do not want on the public website. When the Cloudinary collection has at least one image, the public site will use the managed collection instead of the local fallback. Therefore, upload the complete collection before starting to use that category.

After migration, use the admin page to upload and delete photos. Deletion is permanent from Cloudinary and removes the photo from the managed website collection. It does not delete the separate local originals in your project folders.

## Security notes

- The admin route is not linked from the public navigation, but it is protected by password authentication.
- The password is checked server-side and the session is stored in an HTTP-only cookie.
- Cloudinary credentials are used only on the server and must never be prefixed with `NEXT_PUBLIC_`.
- Photo uploads are limited to image MIME types and 12 MB per file.
- Admin API requests require a valid admin session; the public read-only photo list exposes only photos tagged for the public gallery/customer collections.
