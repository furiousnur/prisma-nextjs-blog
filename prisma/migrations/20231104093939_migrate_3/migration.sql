-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `news_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `catID` INTEGER NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `short_des` TEXT NOT NULL,
    `long_des` TEXT NOT NULL,
    `keywords` VARCHAR(300) NOT NULL,
    `type` VARCHAR(50) NOT NULL,
    `img1` VARCHAR(300) NOT NULL,
    `img2` VARCHAR(300) NOT NULL,
    `img3` VARCHAR(300) NOT NULL,
    `img4` VARCHAR(300) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `news_list` ADD CONSTRAINT `news_list_catID_fkey` FOREIGN KEY (`catID`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
