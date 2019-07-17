document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist90122422\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-resample_itk_image-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-resample_itk_image-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">resample_img<\/span>(<span class=\"pl-smi\">itk_image<\/span>, <span class=\"pl-smi\">out_spacing<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-c1\">2.0<\/span>, <span class=\"pl-c1\">2.0<\/span>, <span class=\"pl-c1\">2.0<\/span>], <span class=\"pl-smi\">is_label<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">False<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Resample images to 2mm spacing with SimpleITK<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">    original_spacing <span class=\"pl-k\">=<\/span> itk_image.GetSpacing()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">    original_size <span class=\"pl-k\">=<\/span> itk_image.GetSize()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">    out_size <span class=\"pl-k\">=<\/span> [<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">int<\/span>(np.round(original_size[<span class=\"pl-c1\">0<\/span>] <span class=\"pl-k\">*<\/span> (original_spacing[<span class=\"pl-c1\">0<\/span>] <span class=\"pl-k\">/<\/span> out_spacing[<span class=\"pl-c1\">0<\/span>]))),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">int<\/span>(np.round(original_size[<span class=\"pl-c1\">1<\/span>] <span class=\"pl-k\">*<\/span> (original_spacing[<span class=\"pl-c1\">1<\/span>] <span class=\"pl-k\">/<\/span> out_spacing[<span class=\"pl-c1\">1<\/span>]))),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c1\">int<\/span>(np.round(original_size[<span class=\"pl-c1\">2<\/span>] <span class=\"pl-k\">*<\/span> (original_spacing[<span class=\"pl-c1\">2<\/span>] <span class=\"pl-k\">/<\/span> out_spacing[<span class=\"pl-c1\">2<\/span>])))]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">    resample <span class=\"pl-k\">=<\/span> sitk.ResampleImageFilter()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">    resample.SetOutputSpacing(out_spacing)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">    resample.SetSize(out_size)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">    resample.SetOutputDirection(itk_image.GetDirection())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    resample.SetOutputOrigin(itk_image.GetOrigin())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">    resample.SetTransform(sitk.Transform())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    resample.SetDefaultPixelValue(itk_image.GetPixelIDValue())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> is_label:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">        resample.SetInterpolator(sitk.sitkNearestNeighbor)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">else<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">        resample.SetInterpolator(sitk.sitkBSpline)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> resample.Execute(itk_image)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC27\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Assume to have some sitk image (itk_image) and label (itk_label)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">resampled_sitk_img <span class=\"pl-k\">=<\/span> resample_img(itk_image, <span class=\"pl-v\">out_spacing<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-c1\">2.0<\/span>, <span class=\"pl-c1\">2.0<\/span>, <span class=\"pl-c1\">2.0<\/span>], <span class=\"pl-v\">is_label<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">False<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-resample_itk_image-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-resample_itk_image-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">resampled_sitk_lbl <span class=\"pl-k\">=<\/span> resample_img(itk_label, <span class=\"pl-v\">out_spacing<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-c1\">2.0<\/span>, <span class=\"pl-c1\">2.0<\/span>, <span class=\"pl-c1\">2.0<\/span>], <span class=\"pl-v\">is_label<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/mrajchl/ccbd5ed12eb68e0c1afc5da116af614a/raw/67f9862175f9b08150b9dac254a554fdb105fd70/resample_itk_image.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/mrajchl/ccbd5ed12eb68e0c1afc5da116af614a#file-resample_itk_image-py\">resample_itk_image.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')