# Manifestk
An user-facing frontend to AppCache. Shows a dialog box when the app is
being downloaded, and reloads the page when it's done.

# Dependencies
This depends on jQuery UI dialog to display the dialog. You can download
just the dialog component by itself should you wish.

See http://jqueryui.com/download/

# Usage
Include the script in your page and forget about it. The script
automatically registers to AppCache events and fires when it detects
your app is downloading/updating.

Ensure your manifest is named ''manifest.appcache'' and is in the same
directory as your app. This is downloaded by Manifestk to guesstimate
the number of files we're downloading in order to display a semi-
accurate progress bar.

Note: This will probably fail on non-AppCache browsers as there isn't
any checking involved yet.
