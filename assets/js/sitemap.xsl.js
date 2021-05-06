document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        // Set some location variables.
        title = "Sitemap file: " + location;
        document.title = title;

        var tablesort = new Tablesort(document.getElementById("sorted-table"));

        Tablesort.extend(
            "change-frequency",
            function (item) {
                // Regular expression to test against.
                // `item` is a table value to evaluate.
                return (
                    -1 !==
                    item.search(
                        /(always|hourly|daily|weekly|monthly|yearly|never)/i
                    )
                );
            },
            function (a, b) {
                // Custom sort functionality goes here.
                // e.g var n = (a > b) ? -1 : 1;
                var c = [
                    "always",
                    "hourly",
                    "daily",
                    "weekly",
                    "monthly",
                    "yearly",
                    "never",
                ];
                return c.indexOf(b) - c.indexOf(a);
            }
        );
    }
};