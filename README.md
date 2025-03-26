# Haider-s
For babil
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>محافظة بابل</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>مرحبًا في محافظة بابل</h1>
        <nav>
            <ul>
                <li><a href="#home">الصفحة الرئيسية</a></li>
                <li><a href="#tourist">المعالم السياحية</a></li>
                <li><a href="#news">الأخبار</a></li>
                <li><a href="#services">الخدمات الحكومية</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h2>عن محافظة بابل</h2>
        <p>محافظة بابل هي واحدة من المحافظات العراقية الواقعة في وسط العراق. تشتهر بموقعها التاريخي والمعالم السياحية المميزة مثل مدينة بابل القديمة.</p>
    </section>

    <section id="tourist">
        <h2>المعالم السياحية</h2>
        <ul>
            <li>حدائق بابل المعلقة</li>
            <li>آثار مدينة بابل القديمة</li>
            <li>متحف بابل</li>
        </ul>
    </section>

    <section id="news">
        <h2>الأخبار</h2>
        <p>تابع آخر أخبار محافظة بابل وتطورات الأحداث المحلية.</p>
    </section>

    <section id="services">
        <h2>الخدمات الحكومية</h2>
        <p>تقدم محافظة بابل العديد من الخدمات الحكومية للمواطنين، مثل خدمات الصحة والتعليم والإدارة.</p>
    </section>

    <section id="contact">
        <h2>اتصل بنا</h2>
        <p>للتواصل مع الإدارة المحلية لمحافظة بابل، يمكنك الاتصال على:</p>
        <form id="contact-form">
            <label for="name">اسمك:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">البريد الإلكتروني:</label>
            <input type="email" id="email" name="email" required>
            <textarea id="message" name="message" placeholder="أكتب رسالتك هنا..." required></textarea>
            <button type="submit">إرسال</button>
        </form>
    </section>

    <footer>
        <p>© 2025 محافظة بابل</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
