-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "newsSite" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Launche" (
    "id" SERIAL NOT NULL,
    "provider" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "Launche_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "provider" TEXT NOT NULL,
    "articleId" INTEGER,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Launche" ADD CONSTRAINT "Launche_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;
