document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist90052799\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-write_tfrecord-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-write_tfrecord-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">_int64_feature<\/span>(<span class=\"pl-smi\">value<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> tf.train.Feature(<span class=\"pl-v\">int64_list<\/span><span class=\"pl-k\">=<\/span>tf.train.Int64List(<span class=\"pl-v\">value<\/span><span class=\"pl-k\">=<\/span>[value]))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">_float_feature<\/span>(<span class=\"pl-smi\">value<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> tf.train.Feature(<span class=\"pl-v\">float_list<\/span><span class=\"pl-k\">=<\/span>tf.train.FloatList(<span class=\"pl-v\">value<\/span><span class=\"pl-k\">=<\/span>value))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> path to save the TFRecords file<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">train_filename <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>train.tfrecords<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> open the file<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">writer <span class=\"pl-k\">=<\/span> tf.python_io.TFRecordWriter(train_filename)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> iterate through all .nii files:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">for<\/span> meta_data <span class=\"pl-k\">in<\/span> all_filenames:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Load the image and label<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">    img, label <span class=\"pl-k\">=<\/span> load_img(meta_data, reader_params)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Create a feature<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">    feature <span class=\"pl-k\">=<\/span> {<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>train/label<span class=\"pl-pds\">&#39;<\/span><\/span>: _int64_feature(label),<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">               <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>train/image<span class=\"pl-pds\">&#39;<\/span><\/span>: _float_feature(img.ravel())}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">               <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Create an example protocol buffer<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">    example <span class=\"pl-k\">=<\/span> tf.train.Example(<span class=\"pl-v\">features<\/span><span class=\"pl-k\">=<\/span>tf.train.Features(<span class=\"pl-v\">feature<\/span><span class=\"pl-k\">=<\/span>feature))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Serialize to string and write on the file<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">    writer.write(example.SerializeToString())<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-write_tfrecord-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-write_tfrecord-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">writer.close()<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/mrajchl/a436f55ede34b55f65cdbda1c7e9ae28/raw/4958afbcce6e82649b44d51eeb5fa26c60674377/write_TFRecord.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/mrajchl/a436f55ede34b55f65cdbda1c7e9ae28#file-write_tfrecord-py\">write_TFRecord.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')