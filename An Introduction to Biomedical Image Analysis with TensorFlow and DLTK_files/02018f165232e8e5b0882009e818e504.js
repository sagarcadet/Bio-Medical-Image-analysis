document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist90053229\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-feed_from_generator-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-feed_from_generator-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Generator function<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">f<\/span>():<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    fn <span class=\"pl-k\">=<\/span> read_fn(<span class=\"pl-v\">file_references<\/span><span class=\"pl-k\">=<\/span>all_filenames,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">                 <span class=\"pl-v\">mode<\/span><span class=\"pl-k\">=<\/span>tf.estimator.ModeKeys.<span class=\"pl-c1\">TRAIN<\/span>, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">                 <span class=\"pl-v\">params<\/span><span class=\"pl-k\">=<\/span>reader_params)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">    ex <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">next<\/span>(fn)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Yield the next image<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">yield<\/span> ex<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Timed example with generator io<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">dataset <span class=\"pl-k\">=<\/span> tf.data.Dataset.from_generator(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">    f, reader_example_dtypes, reader_example_shapes)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">dataset <span class=\"pl-k\">=<\/span> dataset.repeat(<span class=\"pl-c1\">None<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">dataset <span class=\"pl-k\">=<\/span> dataset.batch(batch_size)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">dataset <span class=\"pl-k\">=<\/span> dataset.prefetch(<span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">iterator <span class=\"pl-k\">=<\/span> dataset.make_initializable_iterator()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">next_dict <span class=\"pl-k\">=<\/span> iterator.get_next()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">with<\/span> tf.train.MonitoredTrainingSession() <span class=\"pl-k\">as<\/span> sess_gen:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Initialize generator<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    sess_gen.run(iterator.initializer)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">with<\/span> Timer(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Generator<span class=\"pl-pds\">&#39;<\/span><\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">for<\/span> i <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(iterations):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Fetch the next batch of images<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feed_from_generator-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-feed_from_generator-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">            gen_batch_feat, gen_batch_lbl <span class=\"pl-k\">=<\/span> sess_gen.run([next_dict[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>features<span class=\"pl-pds\">&#39;<\/span><\/span>], next_dict[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>labels<span class=\"pl-pds\">&#39;<\/span><\/span>]])<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/mrajchl/02018f165232e8e5b0882009e818e504/raw/066cd4dfed840a2770a52957afb0e01ea582e1a9/feed_from_generator.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/mrajchl/02018f165232e8e5b0882009e818e504#file-feed_from_generator-py\">feed_from_generator.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
