package lcw.lcw2_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Lcw2BackApplication {

	public static void main(String[] args) {
		SpringApplication.run(Lcw2BackApplication.class, args);
	}

}
