# Photo ordering update

Copy the included files into the project root, preserving folder paths and replacing the existing files when asked. This update adds drag-and-drop ordering to `/admin/photos`; the order is saved as Cloudinary asset context and returned by the existing photo API, so it applies to public pages and survives refreshes/redeployments. Gallery and customer photos are ordered independently. New photos can be added at any time, then dragged into place and saved.

After copying, restart `npm run dev` if necessary. Open `http://localhost:3000/admin/photos`, drag cards into the desired order, click **Save order**, then check the public gallery and customer strip. Do not deploy until the local test passes.

The order-save endpoint updates each Cloudinary asset's custom context (`bobby_order`). It requires the same Cloudinary API credentials and admin session setup as the existing photo manager.
